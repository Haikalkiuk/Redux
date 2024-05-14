import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, selectUserLoading } from '../slices/userSlice';
import { useGetUsersQuery } from '../slices/userApi';

function UserComponent() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectUserLoading);
  const { data, isLoading: apiIsLoading, error } = useGetUsersQuery();

  useEffect() 
    if (!userData.length && !apiIsLoading && !error) {
      dispatch(userApi.endpoints.getUsers.initiate());
    }
  } dispatch, userData, api