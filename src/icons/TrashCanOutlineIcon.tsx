import React, { FC, memo } from 'react';
import TrashCanOutlineSvg from '../svg/trash-can-outline.svg';

export interface ITrashCanOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrashCanOutlineIcon: FC<ITrashCanOutlineIconProps> = memo(props => {
  return <TrashCanOutlineSvg {...props} />;
});
