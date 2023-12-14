import { CreateClientParams, createClient } from "contentful";
const config: CreateClientParams = {
  space: process.env.NEXT_PUBLIC_CTF_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN!,
};

export const client = createClient(config);
