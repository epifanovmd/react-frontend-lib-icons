import React, { FC, memo } from 'react';
import FilePhoneSvg from '../svg/file-phone.svg';

export interface IFilePhoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FilePhoneIcon: FC<IFilePhoneIconProps> = memo(props => {
  return <FilePhoneSvg {...props} />;
});
