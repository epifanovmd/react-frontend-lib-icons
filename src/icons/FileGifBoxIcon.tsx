import React, { FC, memo } from 'react';
import FileGifBoxSvg from '../svg/file-gif-box.svg';

export interface IFileGifBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileGifBoxIcon: FC<IFileGifBoxIconProps> = memo(props => {
  return <FileGifBoxSvg {...props} />;
});
