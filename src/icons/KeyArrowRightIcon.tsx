import React, { FC, memo } from 'react';
import KeyArrowRightSvg from '../svg/key-arrow-right.svg';

export interface IKeyArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyArrowRightIcon: FC<IKeyArrowRightIconProps> = memo(props => {
  return <KeyArrowRightSvg {...props} />;
});
