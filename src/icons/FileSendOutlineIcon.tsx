import React, { FC, memo } from 'react';
import FileSendOutlineSvg from '../svg/file-send-outline.svg';

export interface IFileSendOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSendOutlineIcon: FC<IFileSendOutlineIconProps> = memo(props => {
  return <FileSendOutlineSvg {...props} />;
});
