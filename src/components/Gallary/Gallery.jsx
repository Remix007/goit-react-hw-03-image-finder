import { Component } from 'react';
import style from './Gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Button from 'components/Button';
import fetchImages from '../Servises/PictureAPI';
