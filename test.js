var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1I90ANhjv578Q20eF0SdvkpGMQgPemGsxbmA9p2xMLx0/edit#gid=0');
query.setQuery('select * where A > 0');
query.send(handleQueryResponse);
