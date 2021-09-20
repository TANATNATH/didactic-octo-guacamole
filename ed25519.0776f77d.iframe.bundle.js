(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2691:function(module,exports,__webpack_require__){"use strict";(function(Buffer){Object.defineProperty(exports,"__esModule",{value:!0}),exports.derivePath=exports.isValidPath=exports.getPublicKey=exports.getMasterKeyFromSeed=void 0;const createHmac=__webpack_require__(386),nacl=__webpack_require__(696),utils_1=__webpack_require__(2810);exports.getMasterKeyFromSeed=seed=>{const I=createHmac("sha512","ed25519 seed").update(Buffer.from(seed,"hex")).digest();return{key:I.slice(0,32),chainCode:I.slice(32)}};exports.getPublicKey=(privateKey,withZeroByte=!0)=>{const signPk=nacl.sign.keyPair.fromSeed(privateKey).secretKey.subarray(32),zero=Buffer.alloc(1,0);return withZeroByte?Buffer.concat([zero,Buffer.from(signPk)]):Buffer.from(signPk)},exports.isValidPath=path=>!!utils_1.pathRegex.test(path)&&!path.split("/").slice(1).map(utils_1.replaceDerive).some(isNaN),exports.derivePath=(path,seed,offset=2147483648)=>{if(!exports.isValidPath(path))throw new Error("Invalid derivation path");const{key:key,chainCode:chainCode}=exports.getMasterKeyFromSeed(seed);return path.split("/").slice(1).map(utils_1.replaceDerive).map((el=>parseInt(el,10))).reduce(((parentKeys,segment)=>(({key:key,chainCode:chainCode},index)=>{const indexBuffer=Buffer.allocUnsafe(4);indexBuffer.writeUInt32BE(index,0);const data=Buffer.concat([Buffer.alloc(1,0),key,indexBuffer]),I=createHmac("sha512",chainCode).update(data).digest();return{key:I.slice(0,32),chainCode:I.slice(32)}})(parentKeys,segment+offset)),{key:key,chainCode:chainCode})}}).call(this,__webpack_require__(29).Buffer)},2810:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.replaceDerive=exports.pathRegex=void 0,exports.pathRegex=new RegExp("^m(\\/[0-9]+')+$"),exports.replaceDerive=val=>val.replace("'","")}}]);