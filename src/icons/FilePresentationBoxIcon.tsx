import React, { FC, memo } from 'react';
import FilePresentationBoxSvg from '../svg/file-presentation-box.svg';

export interface IFilePresentationBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePresentationBoxIcon: FC<IFilePresentationBoxIconProps> = memo(props => {
  return <FilePresentationBoxSvg {...props} />;
});
