import React, { FC, memo } from 'react';
import DeleteSweepSvg from '../svg/delete-sweep.svg';

export interface IDeleteSweepIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteSweepIcon: FC<IDeleteSweepIconProps> = memo(props => {
  return <DeleteSweepSvg {...props} />;
});
