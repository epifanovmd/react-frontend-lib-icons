import React, { FC, memo } from 'react';
import AutoUploadSvg from '../svg/auto-upload.svg';

export interface IAutoUploadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AutoUploadIcon: FC<IAutoUploadIconProps> = memo(props => {
  return <AutoUploadSvg {...props} />;
});
