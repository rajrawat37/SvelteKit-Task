import {writable}  from "svelte/store";

export const currentType=writable("Economy");

export const infants=writable(0);
export const adults=writable(0);
export const child=writable(0);