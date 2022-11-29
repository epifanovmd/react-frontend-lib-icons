import React, { FC, memo } from 'react';
import RelationManyToOneSvg from '../svg/relation-many-to-one.svg';

export interface IRelationManyToOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationManyToOneIcon: FC<IRelationManyToOneIconProps> = memo(props => {
  return <RelationManyToOneSvg {...props} />;
});
