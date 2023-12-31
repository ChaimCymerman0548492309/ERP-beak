"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifInDB = exports.newUserValidator = void 0;
const newUserValidator = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]{7,12}$/;
    return password.length >= 7 && passwordRegex.test(password);
};
exports.newUserValidator = newUserValidator;
const ifInDB = (objectUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userFromDB = yield UserModel.findOne({ email: objectUser.email });
    return userFromDB !== null;
});
exports.ifInDB = ifInDB;
