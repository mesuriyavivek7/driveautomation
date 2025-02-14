'use client'; // Needed only if using React Server Components

import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';

type Props = {
  onUpload?:any;
};

type FileEntry = {
  status: string;
  cdnUrl?: string;
};

function UploadCareButton({ onUpload }: Props) {
  const router = useRouter()
  const handleUploadComplete =async (fileInfo: any) => {
    console.log(fileInfo.allEntries)
    const successfulFiles = fileInfo.allEntries.filter(
      (file: FileEntry) => file.status === 'success'
    );
    
    if (successfulFiles.length > 0) {
      const file = await onUpload(successfulFiles[0].cdnUrl || ''); // Assuming you need the first file's URL

      if(file){
        router.refresh()
      }
    }
  };

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="f62e7a42685349d589cb"
        onChange={(fileInfo) => handleUploadComplete(fileInfo)}
      />
    </div>
  );
}

export default UploadCareButton;
