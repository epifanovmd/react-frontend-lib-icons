import React, { FC, memo } from 'react';
import FileRefreshOutlineSvg from '../svg/file-refresh-outline.svg';

export interface IFileRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileRefreshOutlineIcon: FC<IFileRefreshOutlineIconProps> = memo(props => {
  return <FileRefreshOutlineSvg {...props} />;
});
