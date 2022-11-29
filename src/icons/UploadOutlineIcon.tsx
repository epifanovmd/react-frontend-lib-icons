import React, { FC, memo } from 'react';
import UploadOutlineSvg from '../svg/upload-outline.svg';

export interface IUploadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UploadOutlineIcon: FC<IUploadOutlineIconProps> = memo(props => {
  return <UploadOutlineSvg {...props} />;
});
