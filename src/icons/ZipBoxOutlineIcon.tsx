import React, { FC, memo } from 'react';
import ZipBoxOutlineSvg from '../svg/zip-box-outline.svg';

export interface IZipBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZipBoxOutlineIcon: FC<IZipBoxOutlineIconProps> = memo(props => {
  return <ZipBoxOutlineSvg {...props} />;
});
