import 'server-only';
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from '@sanity/client';
import { apiVersion, dataset, projectId } from '../env';

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // set to false for tag-based revalidation
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: 'force-cache',
    next: { tags },
  });
}
