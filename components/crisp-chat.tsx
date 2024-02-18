"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d96952e1-a53a-45b9-b7a4-d42176a2902b");
  }, []);

  return null;
};