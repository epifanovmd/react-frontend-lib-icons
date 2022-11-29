import React, { FC, memo } from 'react';
import LambdaSvg from '../svg/lambda.svg';

export interface ILambdaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LambdaIcon: FC<ILambdaIconProps> = memo(props => {
  return <LambdaSvg {...props} />;
});
