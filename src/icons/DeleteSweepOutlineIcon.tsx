import React, { FC, memo } from 'react';
import DeleteSweepOutlineSvg from '../svg/delete-sweep-outline.svg';

export interface IDeleteSweepOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteSweepOutlineIcon: FC<IDeleteSweepOutlineIconProps> = memo(props => {
  return <DeleteSweepOutlineSvg {...props} />;
});
