import React, { FC, memo } from 'react';
import SkipPreviousCircleOutlineSvg from '../svg/skip-previous-circle-outline.svg';

export interface ISkipPreviousCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipPreviousCircleOutlineIcon: FC<ISkipPreviousCircleOutlineIconProps> = memo(props => {
  return <SkipPreviousCircleOutlineSvg {...props} />;
});
