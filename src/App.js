import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SignupPage from './components/SignupPage';
import BookDetailPage from './components/BookDetailPage';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const books = [
        { id: 1, title: 'LION KING', price: '₹99', image: 'https://tse2.mm.bing.net/th?id=OIP.chsR_ypNPicVc88lFXS2KgHaLH&pid=Api&P=0&h=180' },
        { id: 2, title: 'MADAGASCR', price: '₹199', image: 'https://tse3.mm.bing.net/th?id=OIP.p112tYCke-tQ2M-pdw6pRQHaJc&pid=Api&P=0&h=180' },
        { id: 3, title: 'MEEET THE ROBISONS', price: '₹999', image: 'https://tse2.mm.bing.net/th?id=OIP.Sk8OqFVHY3vkWXIA48gJeQHaHa&pid=Api&P=0&h=180' },
        { id: 4, title: 'PINOCCHIO', price: '₹299', image: 'https://tse4.mm.bing.net/th?id=OIP.SHKsc0meXrOvoKaakgZHqwHaHa&pid=Api&P=0&h=180' },
        { id: 5, title: 'FROZEN II', price: '₹399', image: 'https://tse3.mm.bing.net/th?id=OIP.r2H8qzevKWgwPqCSI62lCwAAAA&pid=Api&P=0&h=180' },
        { id: 1, title: 'CLASSIC STORYBOOK', price: '₹998', image: 'https://tse1.mm.bing.net/th?id=OIP.IQlQOEbj4Ht_ZFEpzetXSAHaKL&pid=Api&P=0&h=180'},
        { id: 2, title: 'RUSKIN BOND', price: '₹169', image: 'https://tse3.mm.bing.net/th?id=OIP.KDZ9TdF4eCnyMK6juat8HwAAAA&pid=Api&P=0&h=180' },
        { id: 3, title: 'BIBLE STORY', price: '₹988', image: 'https://tse1.mm.bing.net/th?id=OIP.zaNu4udKsUPiQjoBXLvc1QHaLG&pid=Api&P=0&h=180'},
        { id: 4, title: 'MELTDOWN', price: '₹99', image: 'https://tse1.mm.bing.net/th?id=OIP.GvjVJh1GXMiZanOITTOtLQAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'SOLDIESRS OD DESTRUCTION', price: '₹399', image: 'https://tse1.mm.bing.net/th?id=OIP.seMBhF2p1-OUbJg7KdyhfgHaLc&pid=Api&P=0&h=180' },
        { id: 1, title: 'RUPTURE', price: '₹499', image: 'https://tse1.mm.bing.net/th?id=OIP.m4t8GrEOEFqjVsBQvUdMygAAAA&pid=Api&P=0&h=180' },
        { id: 2, title: 'KRAGNOS', price: '₹899', image: 'https://tse4.mm.bing.net/th?id=OIP.MGSzKvcnky1yVDbGOnR-EAHaLX&pid=Api&P=0&h=180' },
        { id: 3, title: 'DESTRCTION', price: '₹299', image: 'https://tse1.mm.bing.net/th?id=OIP.dENipU__EPdA7X7lk9uhoQAAAA&pid=Api&P=0&h=180' },
        { id: 4, title: 'DTCO ERTN SUI', price: '₹599', image: 'https://tse4.mm.bing.net/th?id=OIP.oGUJTE9jLdGVysEALzYZ2QHaKg&pid=Api&P=0&h=180' },
        { id: 5, title: 'DESTRUCTION', price: '₹399', image: 'https://tse1.mm.bing.net/th?id=OIP.uY1N9eJoJM8cwUKy1rgwMgHaKO&pid=Api&P=0&h=180' },
        { id: 1, title: 'ASSURED', price: '₹99', image: 'https://tse4.mm.bing.net/th?id=OIP.P5L5fmpB8mxBKihthUdoYgHaL2&pid=Api&P=0&h=180' },
        { id: 2, title: 'ADRIAN MOLE', price: '₹199', image: 'https://tse2.mm.bing.net/th?id=OIP.231keTewWHx-beJZPgyF0wHaLR&pid=Api&P=0&h=180' },
        { id: 3, title: 'BOOK TITLE', price: '₹799', image: 'https://tse2.mm.bing.net/th?id=OIP.kH233zfNz3W7nWIfbEZ18gHaLc&pid=Api&P=0&h=180' },
        { id: 4, title: 'I SURVIVED', price: '₹599', image: 'https://tse1.mm.bing.net/th?id=OIP.w4xpbysoCFjreTkDDSor4QAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'ASHFALL', price: '₹399', image: 'https://tse4.mm.bing.net/th?id=OIP.3ote-C37YH3kbzVDKQp96gHaLH&pid=Api&P=0&h=180' },
        { id: 1, title: 'MARKED IN DESTRUCTION', price: '₹99', image: 'https://tse3.mm.bing.net/th?id=OIP.YYY9QqrHRtJj3COgQKRTUQAAAA&pid=Api&P=0&h=180' },
        { id: 2, title: 'WIMPY WEAK AND WOKE', price: '₹199', image: 'https://tse2.mm.bing.net/th?id=OIP.ET-nvhEGMIZtsUZhV1dZngHaJl&pid=Api&P=0&h=180' },
        { id: 3, title: 'AUTHOR NAME', price: '₹499', image: 'https://tse2.mm.bing.net/th?id=OIP.IZdEmza8FEVyKt5ht7Sc4wHaLH&pid=Api&P=0&h=180' },
        { id: 4, title: 'DAWN OF CHAOS', price: '₹389', image: 'https://tse3.mm.bing.net/th?id=OIP.p3f0dttjBS80Ds3ZAim1ugAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'DEAELICT', price: '₹799', image: 'https://tse4.mm.bing.net/th?id=OIP.-TjzDiXVHl8hXZq4kxcY_gHaD4&pid=Api&P=0&h=180' },
        { id: 5, title: 'HELLBOY', price: '₹199', image: 'https://tse1.mm.bing.net/th?id=OIP.lkn_r83BlntjFzBLeE2wcQHaLc&pid=Api&P=0&h=180' },
        { id: 5, title: 'SYLVIA DAY', price: '₹299', image: 'https://tse2.mm.bing.net/th?id=OIP.i6tzM5TMgu4mCsFyIsRiugAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'KRISTALLNACHT', price: '₹399', image: 'https://tse4.mm.bing.net/th?id=OIP.Vxidox6fYItwLPuIGYGbPwHaLc&pid=Api&P=0&h=180' },
        { id: 5, title: 'BOOKS FIRE', price: '₹499', image: 'https://tse4.mm.bing.net/th?id=OIP.CFOTNphnGLN0Y1yChs1f3AAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'THE EMERALD TABLET', price: '₹599', image: 'https://tse3.mm.bing.net/th?id=OIP.6Wkw8wEWPiFQPCwK7mFTLwAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'DIVINE', price: '₹699', image: 'https://tse2.mm.bing.net/th?id=OIP.2FcnFdU4i-7om9NC6zSWAAAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPILER DESING', price: '₹799', image: 'https://tse4.mm.bing.net/th?id=OIP.3mgjAWVsvm6sWjWI-9zQ6wHaJu&pid=Api&P=0&h=180' },
        { id: 5, title: 'CYBER FORENSICS', price: '₹899', image: 'https://tse4.mm.bing.net/th?id=OIP.UwPlu0PVfHX8bpqmI9nROwHaJw&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPUTER NETWORKS', price: '₹999', image: 'https://tse2.mm.bing.net/th?id=OIP.vOjtFNih3zgEbad1JQ4vVwAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'ARTIFICIAL INTELLIGRN', price: '₹89', image: 'https://tse2.mm.bing.net/th?id=OIP.15B62p7TxRhVsiY9oBzVBAHaKR&pid=Api&P=0&h=180' },
        { id: 5, title: 'DATA STRUCTURES', price: '₹179', image: 'https://tse3.mm.bing.net/th?id=OIP.S60YlLKTngA_QBEDvo7NCAHaHa&pid=Api&P=0&h=180' },
        { id: 5, title: 'THE CSE MANUAL', price: '₹259', image: 'https://tse1.mm.bing.net/th?id=OIP.MHAD7Zhh42k4cbxGAqCEGwHaKp&pid=Api&P=0&h=180' },
        { id: 5, title: 'SYSTEM SOFTWARE', price: '₹769', image: 'https://tse1.mm.bing.net/th?id=OIP.1CqyOfJN3dkyyWn_npqeNgHaKL&pid=Api&P=0&h=180' },
        { id: 5, title: 'PYTHON', price: '₹999', image: 'https://tse1.mm.bing.net/th?id=OIP.FCDHehOcmEdDTyfZcBsqsQAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPUTER SCINENCE', price: '₹699', image: 'https://tse4.mm.bing.net/th?id=OIP.WNVhQ3hcII838ko6JdjeEQHaJT&pid=Api&P=0&h=180' },
        { id: 5, title: 'DISCRETE MATHEMATICS', price: '₹499', image: 'https://tse4.mm.bing.net/th?id=OIP.dg67btsBs_nhjYja2rVVQwHaJc&pid=Api&P=0&h=180' },
        { id: 5, title: 'ILLUMINATED', price: '₹659', image: 'https://tse3.mm.bing.net/th?id=OIP.M9hfyfXscPtANL3LWrkpJgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'BIG DATA ANALYTICS', price: '₹899', image: 'https://tse2.mm.bing.net/th?id=OIP.mTUxWW5qtsh9NEVyIlUpBQHaKH&pid=Api&P=0&h=180' },
        { id: 5, title: 'INFORMATION TECHNOLOY', price: '₹399', image: 'https://tse2.mm.bing.net/th?id=OIP.o1xgDC0I3Dwt2wlKbjB8OgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'SOL THIRD EDITION', price: '₹299', image: 'https://tse2.mm.bing.net/th?id=OIP.gWLUYPUK6T6kJN7gjXsd8gAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'PYTHON PROGRAMMING', price: '₹199', image: 'https://tse1.mm.bing.net/th?id=OIP.E1YPrEwMdVO5X7_BD77YxgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'CLOUD COMPUTING', price: '₹899', image: 'https://tse4.mm.bing.net/th?id=OIP.8JYLqTJ6BlAcTTuLdOlqiAHaJo&pid=Api&P=0&h=180' },
        { id: 5, title: 'ACTIVE BOOK', price: '₹459', image: 'https://tse2.mm.bing.net/th?id=OIP.6KklqdeAO4YQJIJHxAiL1AAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'DATABASE MANAGEMENT SYSTEMS', price: '₹769', image: 'https://tse4.mm.bing.net/th?id=OIP.BdkpPYNpg1Fd4--8lL5CIwHaJv&pid=Api&P=0&h=180' },
        { id: 5, title: 'JAVA', price: '₹789', image: 'https://tse4.mm.bing.net/th?id=OIP.Zc2T0Kyu-O8tWixm_DVeuwAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'SECURITY ENGINEERING', price: '₹769', image: 'https://tse1.mm.bing.net/th?id=OIP.uMHO4RPpnaDpVfs4TNhzDAHaJS&pid=Api&P=0&h=180' },
        { id: 5, title: 'ALGORITHMS', price: '₹489', image: 'https://tse4.mm.bing.net/th?id=OIP.9nsmbPq0e_rUn6kOO2mzbQHaLP&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPUTER VISION', price: '₹679', image: 'https://tse1.mm.bing.net/th?id=OIP.g_RWSikSJVJxS-vbaOQGXgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'UPSC SAMPOORNA', price: '₹999', image: 'https://tse4.mm.bing.net/th?id=OIP.jDXvSF16UFJkRhwMtuP1ZAHaHa&pid=Api&P=0&h=180' },
        { id: 5, title: 'REACT', price: '₹899', image: 'https://tse1.mm.bing.net/th?id=OIP.6slVMj6naZFlNpLBKz9qWQHaKl&pid=Api&P=0&h=180' },
        { id: 5, title: 'HTML TO REACT', price: '₹999', image: 'https://tse3.mm.bing.net/th?id=OIP.oz0YE8qZ18kZiYeT8iRCZgHaEt&pid=Api&P=0&h=180' },
            { id: 57, title: 'physics', price: '₹179', image: 'https://tse2.mm.bing.net/th?id=OIP.a3JiRaDCCev5-0HMATz4QgHaIz&pid=Api&P=0&h=180' },
            { id: 58, title: 'It Ends With Knight', price: '₹99', image: 'https://tse3.mm.bing.net/th?id=OIP.bCwL6QUV9zz-o36MLpJQ1gHaKH&pid=Api&P=0&h=180' },
            { id: 59, title: 'Revista Femass', price: '₹399', image: 'https://tse3.mm.bing.net/th?id=OIP.DpPmkML6Lg96Tmwb-c-p0gHaKe&pid=Api&P=0&h=180' },
            { id: 60, title: 'Colm Toibin', price: '₹1799', image: 'https://tse2.mm.bing.net/th?id=OIP.xlNxUUvCYttYOZ7K4cXaTwHaLS&pid=Api&P=0&h=180' },
            { id: 61, title: 'The Great Gatssby', price: '₹199', image: 'https://tse4.mm.bing.net/th?id=OIP.MZbfupp1CECgPt6Sw17SQAHaEc&pid=Api&P=0&h=180' },
            { id: 62, title: 'Harry Potter', price: '₹399', image: 'https://tse2.mm.bing.net/th?id=OIP.MqDiLXxKKSP7E1hOt4isdAHaLI&pid=Api&P=0&h=180' },
            { id: 63, title: 'The World Of Roald Dahl', price: '₹149', image: 'https://tse4.mm.bing.net/th?id=OIP.LtlMiWKbT7iILWW3Yxb1SQHaJb&pid=Api&P=0&h=180' },
            { id: 64, title: 'The Hound Of The Baskervilles', price: '₹789', image: 'https://tse2.mm.bing.net/th?id=OIP.qYlKFI29yIT0hE_Q51EodQHaLq&pid=Api&P=0&h=180' },
            { id: 65, title: 'Childrens', price: '₹699', image: 'https://tse3.mm.bing.net/th?id=OIP.Bsx7zsJ2vT09qthhCx6RXgHaK7&pid=Api&P=0&h=180' },
            { id: 66, title: 'Mistress Ritz', price: '₹189', image: 'https://tse4.mm.bing.net/th?id=OIP.yDePIbO4Lg1Imb8OspF-ggHaLM&pid=Api&P=0&h=180' },
            { id: 67, title: 'The 100 Best Novels', price: '₹999', image: 'https://tse4.mm.bing.net/th?id=OIP.E_0O_cxbxGXITn29EQgaFgAAAA&pid=Api&P=0&h=180' },
            { id: 68, title: 'Main Street', price: '₹579', image: 'https://tse3.mm.bing.net/th?id=OIP.c3SA_OBn66euFFlTW8SBswHaHa&pid=Api&P=0&h=180' },
            { id: 69, title: 'The Sting Paul Murray', price: '₹179', image: 'https://tse3.mm.bing.net/th?id=OIP.7D1UTSGsaAXeQabweqlHWwHaHa&pid=Api&P=0&h=180' },
            { id: 70, title: 'What The Body Remembers', price: '₹899', image: 'https://tse1.mm.bing.net/th?id=OIP.akxbArzcJjPEei_QUtHA_gHaFj&pid=Api&P=0&h=180' },
            { id: 71, title: 'William Goldmans', price: '₹659', image: 'https://tse2.mm.bing.net/th?id=OIP.8oyrjgrjUXitqM53jpyfOQHaKe&pid=Api&P=0&h=180' },
            { id: 72, title: 'George orwell', price: '₹399', image: 'https://tse3.mm.bing.net/th?id=OIP.Pfg8vMsYVQHuUU4bj8GFDwHaD3&pid=Api&P=0&h=180' },
            
        { id: 1, title: 'CLASSIC STORYBOOK', price: '₹998', image: 'https://tse1.mm.bing.net/th?id=OIP.IQlQOEbj4Ht_ZFEpzetXSAHaKL&pid=Api&P=0&h=180'},
        { id: 2, title: 'RUSKIN BOND', price: '₹169', image: 'https://tse3.mm.bing.net/th?id=OIP.KDZ9TdF4eCnyMK6juat8HwAAAA&pid=Api&P=0&h=180' },
        { id: 3, title: 'BIBLE STORY', price: '₹988', image: 'https://tse1.mm.bing.net/th?id=OIP.zaNu4udKsUPiQjoBXLvc1QHaLG&pid=Api&P=0&h=180'},
        { id: 4, title: 'MELTDOWN', price: '₹99', image: 'https://tse1.mm.bing.net/th?id=OIP.GvjVJh1GXMiZanOITTOtLQAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'SOLDIESRS OD DESTRUCTION', price: '₹399', image: 'https://tse1.mm.bing.net/th?id=OIP.seMBhF2p1-OUbJg7KdyhfgHaLc&pid=Api&P=0&h=180' },
        { id: 1, title: 'RUPTURE', price: '₹499', image: 'https://tse1.mm.bing.net/th?id=OIP.m4t8GrEOEFqjVsBQvUdMygAAAA&pid=Api&P=0&h=180' },
        { id: 2, title: 'KRAGNOS', price: '₹899', image: 'https://tse4.mm.bing.net/th?id=OIP.MGSzKvcnky1yVDbGOnR-EAHaLX&pid=Api&P=0&h=180' },
        { id: 3, title: 'DESTRCTION', price: '₹299', image: 'https://tse1.mm.bing.net/th?id=OIP.dENipU__EPdA7X7lk9uhoQAAAA&pid=Api&P=0&h=180' },
        { id: 4, title: 'DTCO ERTN SUI', price: '₹599', image: 'https://tse4.mm.bing.net/th?id=OIP.oGUJTE9jLdGVysEALzYZ2QHaKg&pid=Api&P=0&h=180' },
        { id: 5, title: 'DESTRUCTION', price: '₹399', image: 'https://tse1.mm.bing.net/th?id=OIP.uY1N9eJoJM8cwUKy1rgwMgHaKO&pid=Api&P=0&h=180' },
        { id: 1, title: 'ASSURED', price: '₹99', image: 'https://tse4.mm.bing.net/th?id=OIP.P5L5fmpB8mxBKihthUdoYgHaL2&pid=Api&P=0&h=180' },
        { id: 2, title: 'ADRIAN MOLE', price: '₹199', image: 'https://tse2.mm.bing.net/th?id=OIP.231keTewWHx-beJZPgyF0wHaLR&pid=Api&P=0&h=180' },
        { id: 3, title: 'BOOK TITLE', price: '₹799', image: 'https://tse2.mm.bing.net/th?id=OIP.kH233zfNz3W7nWIfbEZ18gHaLc&pid=Api&P=0&h=180' },
        { id: 4, title: 'I SURVIVED', price: '₹599', image: 'https://tse1.mm.bing.net/th?id=OIP.w4xpbysoCFjreTkDDSor4QAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'ASHFALL', price: '₹399', image: 'https://tse4.mm.bing.net/th?id=OIP.3ote-C37YH3kbzVDKQp96gHaLH&pid=Api&P=0&h=180' },
        { id: 1, title: 'MARKED IN DESTRUCTION', price: '₹99', image: 'https://tse3.mm.bing.net/th?id=OIP.YYY9QqrHRtJj3COgQKRTUQAAAA&pid=Api&P=0&h=180' },
        { id: 2, title: 'WIMPY WEAK AND WOKE', price: '₹199', image: 'https://tse2.mm.bing.net/th?id=OIP.ET-nvhEGMIZtsUZhV1dZngHaJl&pid=Api&P=0&h=180' },
        { id: 3, title: 'AUTHOR NAME', price: '₹499', image: 'https://tse2.mm.bing.net/th?id=OIP.IZdEmza8FEVyKt5ht7Sc4wHaLH&pid=Api&P=0&h=180' },
        { id: 4, title: 'DAWN OF CHAOS', price: '₹389', image: 'https://tse3.mm.bing.net/th?id=OIP.p3f0dttjBS80Ds3ZAim1ugAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'DEAELICT', price: '₹799', image: 'https://tse4.mm.bing.net/th?id=OIP.-TjzDiXVHl8hXZq4kxcY_gHaD4&pid=Api&P=0&h=180' },
        { id: 5, title: 'HELLBOY', price: '₹199', image: 'https://tse1.mm.bing.net/th?id=OIP.lkn_r83BlntjFzBLeE2wcQHaLc&pid=Api&P=0&h=180' },
        { id: 5, title: 'SYLVIA DAY', price: '₹299', image: 'https://tse2.mm.bing.net/th?id=OIP.i6tzM5TMgu4mCsFyIsRiugAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'KRISTALLNACHT', price: '₹399', image: 'https://tse4.mm.bing.net/th?id=OIP.Vxidox6fYItwLPuIGYGbPwHaLc&pid=Api&P=0&h=180' },
        { id: 5, title: 'BOOKS FIRE', price: '₹499', image: 'https://tse4.mm.bing.net/th?id=OIP.CFOTNphnGLN0Y1yChs1f3AAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'THE EMERALD TABLET', price: '₹599', image: 'https://tse3.mm.bing.net/th?id=OIP.6Wkw8wEWPiFQPCwK7mFTLwAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'DIVINE', price: '₹699', image: 'https://tse2.mm.bing.net/th?id=OIP.2FcnFdU4i-7om9NC6zSWAAAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPILER DESING', price: '₹799', image: 'https://tse4.mm.bing.net/th?id=OIP.3mgjAWVsvm6sWjWI-9zQ6wHaJu&pid=Api&P=0&h=180' },
        { id: 5, title: 'CYBER FORENSICS', price: '₹899', image: 'https://tse4.mm.bing.net/th?id=OIP.UwPlu0PVfHX8bpqmI9nROwHaJw&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPUTER NETWORKS', price: '₹999', image: 'https://tse2.mm.bing.net/th?id=OIP.vOjtFNih3zgEbad1JQ4vVwAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'ARTIFICIAL INTELLIGRN', price: '₹89', image: 'https://tse2.mm.bing.net/th?id=OIP.15B62p7TxRhVsiY9oBzVBAHaKR&pid=Api&P=0&h=180' },
        { id: 5, title: 'DATA STRUCTURES', price: '₹179', image: 'https://tse3.mm.bing.net/th?id=OIP.S60YlLKTngA_QBEDvo7NCAHaHa&pid=Api&P=0&h=180' },
        { id: 5, title: 'THE CSE MANUAL', price: '₹259', image: 'https://tse1.mm.bing.net/th?id=OIP.MHAD7Zhh42k4cbxGAqCEGwHaKp&pid=Api&P=0&h=180' },
        { id: 5, title: 'SYSTEM SOFTWARE', price: '₹769', image: 'https://tse1.mm.bing.net/th?id=OIP.1CqyOfJN3dkyyWn_npqeNgHaKL&pid=Api&P=0&h=180' },
        { id: 5, title: 'PYTHON', price: '₹999', image: 'https://tse1.mm.bing.net/th?id=OIP.FCDHehOcmEdDTyfZcBsqsQAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPUTER SCINENCE', price: '₹699', image: 'https://tse4.mm.bing.net/th?id=OIP.WNVhQ3hcII838ko6JdjeEQHaJT&pid=Api&P=0&h=180' },
        { id: 5, title: 'DISCRETE MATHEMATICS', price: '₹499', image: 'https://tse4.mm.bing.net/th?id=OIP.dg67btsBs_nhjYja2rVVQwHaJc&pid=Api&P=0&h=180' },
        { id: 5, title: 'ILLUMINATED', price: '₹659', image: 'https://tse3.mm.bing.net/th?id=OIP.M9hfyfXscPtANL3LWrkpJgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'BIG DATA ANALYTICS', price: '₹899', image: 'https://tse2.mm.bing.net/th?id=OIP.mTUxWW5qtsh9NEVyIlUpBQHaKH&pid=Api&P=0&h=180' },
        { id: 5, title: 'INFORMATION TECHNOLOY', price: '₹399', image: 'https://tse2.mm.bing.net/th?id=OIP.o1xgDC0I3Dwt2wlKbjB8OgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'SOL THIRD EDITION', price: '₹299', image: 'https://tse2.mm.bing.net/th?id=OIP.gWLUYPUK6T6kJN7gjXsd8gAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'PYTHON PROGRAMMING', price: '₹199', image: 'https://tse1.mm.bing.net/th?id=OIP.E1YPrEwMdVO5X7_BD77YxgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'CLOUD COMPUTING', price: '₹899', image: 'https://tse4.mm.bing.net/th?id=OIP.8JYLqTJ6BlAcTTuLdOlqiAHaJo&pid=Api&P=0&h=180' },
        { id: 5, title: 'ACTIVE BOOK', price: '₹459', image: 'https://tse2.mm.bing.net/th?id=OIP.6KklqdeAO4YQJIJHxAiL1AAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'DATABASE MANAGEMENT SYSTEMS', price: '₹769', image: 'https://tse4.mm.bing.net/th?id=OIP.BdkpPYNpg1Fd4--8lL5CIwHaJv&pid=Api&P=0&h=180' },
        { id: 5, title: 'JAVA', price: '₹789', image: 'https://tse4.mm.bing.net/th?id=OIP.Zc2T0Kyu-O8tWixm_DVeuwAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'SECURITY ENGINEERING', price: '₹769', image: 'https://tse1.mm.bing.net/th?id=OIP.uMHO4RPpnaDpVfs4TNhzDAHaJS&pid=Api&P=0&h=180' },
        { id: 5, title: 'ALGORITHMS', price: '₹489', image: 'https://tse4.mm.bing.net/th?id=OIP.9nsmbPq0e_rUn6kOO2mzbQHaLP&pid=Api&P=0&h=180' },
        { id: 5, title: 'COMPUTER VISION', price: '₹679', image: 'https://tse1.mm.bing.net/th?id=OIP.g_RWSikSJVJxS-vbaOQGXgAAAA&pid=Api&P=0&h=180' },
        { id: 5, title: 'UPSC SAMPOORNA', price: '₹999', image: 'https://tse4.mm.bing.net/th?id=OIP.jDXvSF16UFJkRhwMtuP1ZAHaHa&pid=Api&P=0&h=180' },
        { id: 5, title: 'REACT', price: '₹899', image: 'https://tse1.mm.bing.net/th?id=OIP.6slVMj6naZFlNpLBKz9qWQHaKl&pid=Api&P=0&h=180' },
        { id: 5, title: 'HTML TO REACT', price: '₹999', image: 'https://tse3.mm.bing.net/th?id=OIP.oz0YE8qZ18kZiYeT8iRCZgHaEt&pid=Api&P=0&h=180' },
            { id: 57, title: 'physics', price: '₹179', image: 'https://tse2.mm.bing.net/th?id=OIP.a3JiRaDCCev5-0HMATz4QgHaIz&pid=Api&P=0&h=180' },
            { id: 58, title: 'It Ends With Knight', price: '₹99', image: 'https://tse3.mm.bing.net/th?id=OIP.bCwL6QUV9zz-o36MLpJQ1gHaKH&pid=Api&P=0&h=180' },
            { id: 59, title: 'Revista Femass', price: '₹399', image: 'https://tse3.mm.bing.net/th?id=OIP.DpPmkML6Lg96Tmwb-c-p0gHaKe&pid=Api&P=0&h=180' },
            { id: 60, title: 'Colm Toibin', price: '₹1799', image: 'https://tse2.mm.bing.net/th?id=OIP.xlNxUUvCYttYOZ7K4cXaTwHaLS&pid=Api&P=0&h=180' },
            { id: 61, title: 'The Great Gatssby', price: '₹199', image: 'https://tse4.mm.bing.net/th?id=OIP.MZbfupp1CECgPt6Sw17SQAHaEc&pid=Api&P=0&h=180' },
            { id: 62, title: 'Harry Potter', price: '₹399', image: 'https://tse2.mm.bing.net/th?id=OIP.MqDiLXxKKSP7E1hOt4isdAHaLI&pid=Api&P=0&h=180' },
            { id: 63, title: 'The World Of Roald Dahl', price: '₹149', image: 'https://tse4.mm.bing.net/th?id=OIP.LtlMiWKbT7iILWW3Yxb1SQHaJb&pid=Api&P=0&h=180' },
            { id: 64, title: 'The Hound Of The Baskervilles', price: '₹789', image: 'https://tse2.mm.bing.net/th?id=OIP.qYlKFI29yIT0hE_Q51EodQHaLq&pid=Api&P=0&h=180' },
            { id: 65, title: 'Childrens', price: '₹699', image: 'https://tse3.mm.bing.net/th?id=OIP.Bsx7zsJ2vT09qthhCx6RXgHaK7&pid=Api&P=0&h=180' },
            { id: 66, title: 'Mistress Ritz', price: '₹189', image: 'https://tse4.mm.bing.net/th?id=OIP.yDePIbO4Lg1Imb8OspF-ggHaLM&pid=Api&P=0&h=180' },
            { id: 67, title: 'The 100 Best Novels', price: '₹999', image: 'https://tse4.mm.bing.net/th?id=OIP.E_0O_cxbxGXITn29EQgaFgAAAA&pid=Api&P=0&h=180' },
            { id: 68, title: 'Main Street', price: '₹579', image: 'https://tse3.mm.bing.net/th?id=OIP.c3SA_OBn66euFFlTW8SBswHaHa&pid=Api&P=0&h=180' },
            { id: 69, title: 'The Sting Paul Murray', price: '₹179', image: 'https://tse3.mm.bing.net/th?id=OIP.7D1UTSGsaAXeQabweqlHWwHaHa&pid=Api&P=0&h=180' },
            { id: 70, title: 'What The Body Remembers', price: '₹899', image: 'https://tse1.mm.bing.net/th?id=OIP.akxbArzcJjPEei_QUtHA_gHaFj&pid=Api&P=0&h=180' },
            { id: 71, title: 'William Goldmans', price: '₹659', image: 'https://tse2.mm.bing.net/th?id=OIP.8oyrjgrjUXitqM53jpyfOQHaKe&pid=Api&P=0&h=180' },
            { id: 72, title: 'George orwell', price: '₹399', image: 'https://tse3.mm.bing.net/th?id=OIP.Pfg8vMsYVQHuUU4bj8GFDwHaD3&pid=Api&P=0&h=180' },
            
    ];

    return (
        <Router>
            {isLoggedIn && <Navbar onLogout={handleLogout} />}
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/home" element={isLoggedIn ? <HomePage books={books} /> : <Navigate to="/" />} />
                <Route path="/about" element={isLoggedIn ? <AboutPage /> : <Navigate to="/" />} />
                <Route path="/contact" element={isLoggedIn ? <ContactPage /> : <Navigate to="/" />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/book/:id" element={<BookDetailPage books={books} />} />
            </Routes>
        </Router>
    );
};

export default App;
