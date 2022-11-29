import React, { FC, memo } from 'react';
import EmberSvg from '../svg/ember.svg';

export interface IEmberIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmberIcon: FC<IEmberIconProps> = memo(props => {
  return <EmberSvg {...props} />;
});
