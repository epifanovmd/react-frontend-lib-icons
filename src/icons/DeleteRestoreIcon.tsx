import React, { FC, memo } from 'react';
import DeleteRestoreSvg from '../svg/delete-restore.svg';

export interface IDeleteRestoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteRestoreIcon: FC<IDeleteRestoreIconProps> = memo(props => {
  return <DeleteRestoreSvg {...props} />;
});
