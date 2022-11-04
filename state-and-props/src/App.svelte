<script>
  import produce, { freeze } from 'immer';
  import List from './lib/List.svelte';

  // Let's assume we have an immutable data source.
  // This is good practice, but it also represents cases
  // where we would want to coordinate any update efforts
  // centrally in order to send a web service request
  // or similar.
  let subscribers = freeze(
    [
      { name: 'Anna', active: true, lastNotified: '2021-08-03' },
      { name: 'Bill', active: true, lastNotified: '2021-03-09' },
      { name: 'Sue', active: true, lastNotified: '2021-11-27' },
      { name: 'Joe', active: false, lastNotified: '2020-05-18' },
      { name: 'Emma', active: true, lastNotified: '2022-01-03' },
    ],
    true
  );

  const rowChanged = ({ detail: { rowIndex, row } }) => {
    subscribers = produce(subscribers, (d) => {
      d[rowIndex] = row;
    });
  };
</script>

<div>
  <List data={subscribers} on:rowChanged={rowChanged} />
</div>

<style>
  div {
    max-width: 70%;
    margin: 0 auto;
    font-family: sans-serif;
    font-size: 12pt;
  }
</style>
