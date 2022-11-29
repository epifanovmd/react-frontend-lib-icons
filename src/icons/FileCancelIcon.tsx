import React, { FC, memo } from 'react';
import FileCancelSvg from '../svg/file-cancel.svg';

export interface IFileCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCancelIcon: FC<IFileCancelIconProps> = memo(props => {
  return <FileCancelSvg {...props} />;
});
