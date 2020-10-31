import React, { useEffect } from 'react';
import Script from 'react-load-script';

const AddThis = (props) => {
  useEffect(() => {
    if (window.addthis) {
      window.addthis.update('share', 'url', props.url);
    }
  }, [props.url]);

  const handleAddthisLoaded = () => {
    window.addthis.init();
    window.addthis.update('share', 'url', props.url);
  };

  return (
    <>
      <div className="addthis_inline_share_toolbox"></div>
      <Script
        url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f95af47011cdcaa"
        onLoad={handleAddthisLoaded} />
    </>
  );
}

export default AddThis;
