(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(121)),l={id:"pylon_capture",title:"PylonCapture"},b={unversionedId:"fundamentals/pylon/pylon_capture",id:"fundamentals/pylon/pylon_capture",isDocsHomePage:!1,title:"PylonCapture",description:"Prerequisites:",source:"@site/docs/fundamentals/pylon/pylon_capture.md",slug:"/fundamentals/pylon/pylon_capture",permalink:"/bonsai-rx-docs/docs/fundamentals/pylon/pylon_capture",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/pylon/pylon_capture.md",version:"current",sidebar:"docs",previous:{title:"CsvWriter",permalink:"/bonsai-rx-docs/docs/fundamentals/io/csv_writer"},next:{title:"SpinnakerCapture",permalink:"/bonsai-rx-docs/docs/fundamentals/spinnaker/spinnaker_capture"}},p=[],c={rightToc:p};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"bonsai Pylon Library"),Object(r.b)("li",{parentName:"ul"},"pylon Camera Software Suite 5.1.0 from the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.baslerweb.com/en/sales-support/downloads/software-downloads/"}),"basler\nwebsite"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Category"),": Source"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Brief"),": Acquires a sequence of images from a Basler camera using the pylon software"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Properties"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ParameterFile")," - full path to an ",Object(r.b)("inlineCode",{parentName:"li"},".fps")," file describing the desired camera features. The file can be created in pylonViewer ",Object(r.b)("inlineCode",{parentName:"li"},"Camera -> Save features")," once the features are set."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SerialNumber")," - serial number of the camera, identical to that displayed in pylonViewer. It should appear in the drop-down list once the camera is connected.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Output")," (",Object(r.b)("em",{parentName:"p"},"Bonsai.pylon.pylonDataFrame"),"):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Image")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.IpIImage"),") - 2D matrix of pixels, accepted as\ninput by ",Object(r.b)("inlineCode",{parentName:"li"},"VideoWriter"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IsInvalid")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ElementType")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Size")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.Size"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Depth")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.IpIDepth"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Channels")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WidthStep")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ImageData")," (",Object(r.b)("em",{parentName:"li"},"System.IntPtr"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ChannelOfInterest")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RegionOfInterest")," (",Object(r.b)("em",{parentName:"li"},"OpenCV.Net.Rect"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"X")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Y")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IsClosed")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GrabResult")," (",Object(r.b)("em",{parentName:"li"},"Basler.Pylon.IGrabResult"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Orientation")," (",Object(r.b)("em",{parentName:"li"},"Basler.Pylon.ImageOrientation"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PaddingX")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Height")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Width")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelTypeValue")," (",Object(r.b)("em",{parentName:"li"},"Basler.Pylon.PixelTypei)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PixelData")," (",Object(r.b)("em",{parentName:"li"},"object"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IsValid")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SkippedImageCount")," (",Object(r.b)("em",{parentName:"li"},"long"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ImageNumber")," (",Object(r.b)("em",{parentName:"li"},"long"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ID")," (",Object(r.b)("em",{parentName:"li"},"long"),") - 1-based frame index"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BufferUserData")," (",Object(r.b)("em",{parentName:"li"},"object"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"StreamGrabberUserData")," (",Object(r.b)("em",{parentName:"li"},"object"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Timestamp")," (",Object(r.b)("em",{parentName:"li"},"long"),") - hardware timestamp"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BlockID")," (",Object(r.b)("em",{parentName:"li"},"long"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PayloadSize")," (",Object(r.b)("em",{parentName:"li"},"long"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HasCRC")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ChunkData")," (",Object(r.b)("em",{parentName:"li"},"Basler.Pylon.IParameterCollection"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HasChunkData")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ErrorDescription")," (",Object(r.b)("em",{parentName:"li"},"string"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Length")," (",Object(r.b)("em",{parentName:"li"},"int"),")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ErrorCode")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GrabSucceeded")," (",Object(r.b)("em",{parentName:"li"},"bool"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PaddingY")," (",Object(r.b)("em",{parentName:"li"},"int"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PayloadTypeValue")," (",Object(r.b)("em",{parentName:"li"},"Basler.Pylon.PayloadType"),")")))),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip"),": Write video to file using ",Object(r.b)("inlineCode",{parentName:"p"},"VideoWriter")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip"),": To visualise the video during acquisition, install the bonsai Vision Design Library and open ",Object(r.b)("inlineCode",{parentName:"p"},"Bonsai.Vision.Design.IpIImageVisualizer"),"from the ",Object(r.b)("inlineCode",{parentName:"p"},"Image")," output node of the respective image capture node"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Common errors"),":"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Runtime error: Unable to acquire camera frame"),"\nOne possible reason is that the camera is currently open in pylonViewer."))}m.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=m(n),j=a,u=o["".concat(l,".").concat(j)]||o[j]||O[j]||r;return n?i.a.createElement(u,b(b({ref:t},c),{},{components:n})):i.a.createElement(u,b({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=j;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);