import React, { FC, memo } from 'react';
import RestoreSvg from '../svg/restore.svg';

export interface IRestoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RestoreIcon: FC<IRestoreIconProps> = memo(props => {
  return <RestoreSvg {...props} />;
});
