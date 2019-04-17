import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadSuccess, loadFailure } from "./actions";

export function* load() {
  try {
    const reponse = yield call(api.get, 'users/jaum97/repos');

    yield;
  } catch (err) {}
}
