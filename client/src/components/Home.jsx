import React, { useEffect } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes, filterCreatedRecipe, orderByName } from '../actions';
import { Link } from 'react-router-dom'
import RecipeCard from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';