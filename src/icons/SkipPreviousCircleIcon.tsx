import React, { FC, memo } from 'react';
import SkipPreviousCircleSvg from '../svg/skip-previous-circle.svg';

export interface ISkipPreviousCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipPreviousCircleIcon: FC<ISkipPreviousCircleIconProps> = memo(props => {
  return <SkipPreviousCircleSvg {...props} />;
});
