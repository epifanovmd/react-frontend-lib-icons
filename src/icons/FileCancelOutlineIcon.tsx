import React, { FC, memo } from 'react';
import FileCancelOutlineSvg from '../svg/file-cancel-outline.svg';

export interface IFileCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCancelOutlineIcon: FC<IFileCancelOutlineIconProps> = memo(props => {
  return <FileCancelOutlineSvg {...props} />;
});
