// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function listClusterNames() {
  return request<{ clusters: string[] }>('/api/clusternames');
}

export async function listClusters() {
  return request<{ clusters: API.ClusterType[] }>('/api/clusters');
}

export async function addCluster(params: API.ClusterType) {
  return request<{ cluster: API.ClusterType }>('/api/clusters', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateCluster(params: API.ClusterType) {
  return request<{ cluster: API.ClusterType }>('/api/clusters', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}

export async function removeCluster(params: API.ClusterType) {
  return request<{ cluster: API.ClusterType }>('/api/clusters', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function listComponentDefinitions(cluster: string) {
  return request<{ componentDefinitions: API.CapabilityType[] }>(
    `/api/clusters/${cluster}/componentdefinitions`,
  );
}

export async function listTraitDefinitions(cluster: string) {
  return request<{ traitDefinitions: API.CapabilityType[] }>(
    `/api/clusters/${cluster}/traitdefinitions`,
  );
}
