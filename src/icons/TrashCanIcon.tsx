import React, { FC, memo } from 'react';
import TrashCanSvg from '../svg/trash-can.svg';

export interface ITrashCanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrashCanIcon: FC<ITrashCanIconProps> = memo(props => {
  return <TrashCanSvg {...props} />;
});
