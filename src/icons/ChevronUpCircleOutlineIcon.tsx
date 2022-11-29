import React, { FC, memo } from 'react';
import ChevronUpCircleOutlineSvg from '../svg/chevron-up-circle-outline.svg';

export interface IChevronUpCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronUpCircleOutlineIcon: FC<IChevronUpCircleOutlineIconProps> = memo(props => {
  return <ChevronUpCircleOutlineSvg {...props} />;
});
