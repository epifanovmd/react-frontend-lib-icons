import React, { FC, memo } from 'react';
import WeightGramSvg from '../svg/weight-gram.svg';

export interface IWeightGramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeightGramIcon: FC<IWeightGramIconProps> = memo(props => {
  return <WeightGramSvg {...props} />;
});
