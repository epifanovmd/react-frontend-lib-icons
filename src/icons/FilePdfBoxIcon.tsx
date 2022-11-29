import React, { FC, memo } from 'react';
import FilePdfBoxSvg from '../svg/file-pdf-box.svg';

export interface IFilePdfBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePdfBoxIcon: FC<IFilePdfBoxIconProps> = memo(props => {
  return <FilePdfBoxSvg {...props} />;
});
