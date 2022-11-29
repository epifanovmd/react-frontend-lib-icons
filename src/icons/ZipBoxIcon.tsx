import React, { FC, memo } from 'react';
import ZipBoxSvg from '../svg/zip-box.svg';

export interface IZipBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZipBoxIcon: FC<IZipBoxIconProps> = memo(props => {
  return <ZipBoxSvg {...props} />;
});
