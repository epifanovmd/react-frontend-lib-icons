import React, { FC, memo } from 'react';
import ZipDiskSvg from '../svg/zip-disk.svg';

export interface IZipDiskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZipDiskIcon: FC<IZipDiskIconProps> = memo(props => {
  return <ZipDiskSvg {...props} />;
});
