import React, { FC, memo } from 'react';
import FilePhoneOutlineSvg from '../svg/file-phone-outline.svg';

export interface IFilePhoneOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePhoneOutlineIcon: FC<IFilePhoneOutlineIconProps> = memo(props => {
  return <FilePhoneOutlineSvg {...props} />;
});
