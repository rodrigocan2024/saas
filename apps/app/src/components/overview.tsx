"use client"

import { Charts } from "@saas/ui/charts"

const data = [
    {
        month: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Fev",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Abr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Mai",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Ago",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Set",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Out",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Dez",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]

export function Overview() {
    return (
        <Charts.ResponsiveContainer width="100%" height={350}>
            <Charts.BarChart data={data}>
                <Charts.XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Charts.YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `R$ ${value}`}
                />
                <Charts.Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </Charts.BarChart>
        </Charts.ResponsiveContainer>
    )
}