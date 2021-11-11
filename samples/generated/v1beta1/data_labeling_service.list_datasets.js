// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(parent) {
  // [START datalabeling_v1beta1_generated_DataLabelingService_ListDatasets_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Dataset resource parent, format:
   *  projects/{project_id}
   */
  // const parent = 'abc123'
  /**
   *  Optional. Filter on dataset is not supported at this moment.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Requested page size. Server may return fewer results than
   *  requested. Default value is 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. A token identifying a page of results for the server to return.
   *  Typically obtained by
   *  ListDatasetsResponse.next_page_token google.cloud.datalabeling.v1beta1.ListDatasetsResponse.next_page_token  of the previous
   *  DataLabelingService.ListDatasets  call.
   *  Returns the first page if empty.
   */
  // const pageToken = 'abc123'

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} =
    require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function callListDatasets() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datalabelingClient.listDatasetsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListDatasets();
  // [END datalabeling_v1beta1_generated_DataLabelingService_ListDatasets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
