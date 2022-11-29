import React, { FC, memo } from 'react';
import CreationSvg from '../svg/creation.svg';

export interface ICreationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreationIcon: FC<ICreationIconProps> = memo(props => {
  return <CreationSvg {...props} />;
});
