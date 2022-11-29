import React, { FC, memo } from 'react';
import FileMinusOutlineSvg from '../svg/file-minus-outline.svg';

export interface IFileMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMinusOutlineIcon: FC<IFileMinusOutlineIconProps> = memo(props => {
  return <FileMinusOutlineSvg {...props} />;
});
