import React, { FC, memo } from 'react';
import RelationManyToManySvg from '../svg/relation-many-to-many.svg';

export interface IRelationManyToManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationManyToManyIcon: FC<IRelationManyToManyIconProps> = memo(props => {
  return <RelationManyToManySvg {...props} />;
});
