import Cookies from 'js-cookie';

import { useState, useEffect } from 'react';

const URL = "https://conintact-backend.vercel.app/api/group/user/";

const sessionToken = Cookies.get("sessionToken");

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${sessionToken}`
};

export const getGroups = async () => {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers,
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message || "Something went wrong" };
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const getGroup = async (id) => {
  try {
    const url = `${URL}${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message || "Something went wrong" };
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const postGroup = async (group) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers,
      body: JSON.stringify(group),
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message || "Something went wrong" };
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const updateGroup = async (id, updatedGroup) => {
  try {
    const url = `${URL}${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(updatedGroup),
    });

    const data = await response.json();
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message || "Something went wrong" };
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const deleteGroup = async (id) => {
  try {
    const url = `${URL}${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    const data = await response.json();
    
    if (response.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message || "Something went wrong" };
    }
  } catch (err) {
    return { success: false, message: err.message };
  }
};
