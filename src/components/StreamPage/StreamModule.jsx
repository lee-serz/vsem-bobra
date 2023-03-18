
import LiveStream from './LiveStream';

function StreamModule() {
  const apiKey = 'AIzaSyAzp0kr8-EW_PLUb6qw93_cpr-7YCDZ34c';
  const channelId = 'UCJ6onQWKWPvBKkW_dhb6_1A';

  return (
    <div className="stream-module">
      <LiveStream apiKey={apiKey} channelId={channelId} />
    </div>
  );
}

export default StreamModule;