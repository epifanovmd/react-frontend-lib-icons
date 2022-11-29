import React, { FC, memo } from 'react';
import SemanticWebSvg from '../svg/semantic-web.svg';

export interface ISemanticWebIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SemanticWebIcon: FC<ISemanticWebIconProps> = memo(props => {
  return <SemanticWebSvg {...props} />;
});
